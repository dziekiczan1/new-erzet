FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --prod && \
    pnpm add -D typescript

FROM base AS builder
WORKDIR /app

ARG NEXT_PUBLIC_CONTACT_SERVICE
ARG NEXT_PUBLIC_CONTACT_KEY

ENV NEXT_PUBLIC_CONTACT_SERVICE=$NEXT_PUBLIC_CONTACT_SERVICE
ENV NEXT_PUBLIC_CONTACT_KEY=$NEXT_PUBLIC_CONTACT_KEY

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3011
ENV HOSTNAME="0.0.0.0"

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER node
EXPOSE 3011

CMD ["node", "server.js"]
