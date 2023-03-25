import { Module } from "@nestjs/common";
import { BodyMeasurementModuleBase } from "./base/bodyMeasurement.module.base";
import { BodyMeasurementService } from "./bodyMeasurement.service";
import { BodyMeasurementController } from "./bodyMeasurement.controller";

@Module({
  imports: [BodyMeasurementModuleBase],
  controllers: [BodyMeasurementController],
  providers: [BodyMeasurementService],
  exports: [BodyMeasurementService],
})
export class BodyMeasurementModule {}
