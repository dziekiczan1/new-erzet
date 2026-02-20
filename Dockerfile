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

RUN apk add --no-cache curl tar jq && \
    INFISICAL_VERSION=$(curl -s https://api.github.com/repos/Infisical/cli/releases/latest | jq -r .tag_name) && \
    curl -L -o infisical.tar.gz https://github.com/Infisical/cli/releases/download/${INFISICAL_VERSION}/infisical_${INFISICAL_VERSION#v}_Linux_arm64.tar.gz && \
    tar -xzf infisical.tar.gz infisical && \
    mv infisical /usr/local/bin/infisical && \
    chmod +x /usr/local/bin/infisical && \
    rm infisical.tar.gz

COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

USER node
EXPOSE 3011

ENTRYPOINT ["/app/entrypoint.sh"]
