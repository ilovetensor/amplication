import { Field, ObjectType } from '@nestjs/graphql';
import { EntityPermission } from './EntityPermission'; // eslint-disable-line import/no-cycle
import { AppRole } from './AppRole'; // eslint-disable-line import/no-cycle

@ObjectType({
  isAbstract: true,
  description: undefined
})
export class EntityPermissionField {
  @Field(() => String, {
    nullable: false
  })
  id!: string;

  @Field(() => String, {
    nullable: false
  })
  entityPermissionId!: string;

  @Field(() => EntityPermission, {
    nullable: true
  })
  entityPermission?: EntityPermission;

  @Field(() => String, {
    nullable: false
  })
  fieldId!: string;

  @Field(() => AppRole, {
    nullable: true
  })
  field?: AppRole;
}