// This source file is part of the Stanford Spezi open-source project
//
// SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT

import { Module } from "@nestjs/common";
import { HealthCheckController } from "./health-check.controller";
import { HealthCheckService } from "./health-check.service";

@Module({
  imports: [],
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class HealthCheckModule {}
