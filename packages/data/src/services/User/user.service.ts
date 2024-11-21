import {

  UpdateUserProfileForm,
} from "@repo/models";
import { userApi } from "@data/api";
import { UseRTKQueryOptions } from "@repo/models";

export const userService = {
  useGetProfile: (options?: UseRTKQueryOptions) => {
    return userApi.useGetProfileQuery(undefined, {
      ...options,
    });
  },
  useGetShops: (options?: UseRTKQueryOptions) => {
    return userApi.useGetShopsQuery(undefined, options);
  },

  

  useUpdateProfile: () => {
    const [updateProfile, updateProfileResult] =
      userApi.useUpdateProfileMutation();
    const request = (userProfileUpdateForm: UpdateUserProfileForm) => {
      return updateProfile(userProfileUpdateForm);
    };
    return {
      ...updateProfileResult,
      request,
    };
  },
  // useCreateUser: () => {
  //   const [createMember, memberCreateResult] = userApi.useCreateUserMutation();
  //   const request = (memberCreateForm: CreateMemberForm) => {
  //     return createMember(memberCreateForm);
  //   };
  //   return {
  //     ...memberCreateResult,
  //     request,
  //   };
  // },


 
};
