//This source file is part of the Stanford Spezi open-source project
//
//SPDX-FileCopyrightText: 2024 Stanford University and the project authors (see CONTRIBUTORS.md)
//
//SPDX-License-Identifier: MIT


import { Test, type TestingModule } from "@nestjs/testing";
import { HealthCheckController } from "../health-check.controller";
import { HealthCheckService } from "../health-check.service";

describe("AppController", () => {
  let healthCheckController: HealthCheckController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController],
      providers: [HealthCheckService],
    }).compile();

    healthCheckController = app.get<HealthCheckController>(
      HealthCheckController,
    );
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(healthCheckController.getHello()).toBe("Hello World!");
    });
  });
});
