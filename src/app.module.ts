// This source file is part of the Stanford Spezi open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT

import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MikroOrmModule } from "@mikro-orm/nestjs";

import MikroOrmConfig from "@/database/db.config";
import { HealthCheckModule } from "@modules/health-check/health-check.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        MikroOrmConfig(configService),
      inject: [ConfigService],
    }),
    HealthCheckModule,
  ],
  controllers: [],
  providers: [],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppModule {}
