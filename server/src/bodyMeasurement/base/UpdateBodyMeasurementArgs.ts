/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { BodyMeasurementWhereUniqueInput } from "./BodyMeasurementWhereUniqueInput";
import { BodyMeasurementUpdateInput } from "./BodyMeasurementUpdateInput";

@ArgsType()
class UpdateBodyMeasurementArgs {
  @Field(() => BodyMeasurementWhereUniqueInput, { nullable: false })
  where!: BodyMeasurementWhereUniqueInput;
  @Field(() => BodyMeasurementUpdateInput, { nullable: false })
  data!: BodyMeasurementUpdateInput;
}

export { UpdateBodyMeasurementArgs as UpdateBodyMeasurementArgs };
