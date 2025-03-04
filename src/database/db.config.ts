// This source file is part of the Stanford Spezi open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT

import { Options } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { ConfigService } from "@nestjs/config";

const MikroOrmConfig = (configService: ConfigService): Options => ({
  driver: PostgreSqlDriver,
  host: configService.get<string>("DB_HOST", "localhost"),
  port: configService.get<number>("DB_PORT", 5432),
  user: configService.get<string>("DB_USER", "postgres"),
  password: configService.get<string>("DB_PASSWORD", "password"),
  dbName: configService.get<string>("DB_NAME", "test"),
  entities: ["dist/**/*.entity.js"], // Path for compiled entities
  entitiesTs: ["src/**/*.entity.ts"], // Path for TypeScript entities
  debug: configService.get<boolean>("DB_DEBUG", false),
  migrations: {
    path: "dist/database/migrations",
    pathTs: "src/database/migrations",
  },
  allowGlobalContext: true, // Allows usage outside request scope
});

export default MikroOrmConfig;
