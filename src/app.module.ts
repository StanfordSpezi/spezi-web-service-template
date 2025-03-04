//This source file is part of the Stanford Spezi open-source project
//
//SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
//SPDX-License-Identifier: MIT


import { Module } from "@nestjs/common";
import { HealthCheckModule } from "@modules/health-check/health-check.module";

@Module({
  imports: [HealthCheckModule],
  controllers: [],
  providers: [],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppModule {}
