// This source file is part of the Stanford Spezi open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { HealthCheckModule } from "@modules/health-check/health-check.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ".env/.env" }),
    // MikroOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) =>
    //     MikroOrmConfig(configService),
    //   inject: [ConfigService],
    // }),
    HealthCheckModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
