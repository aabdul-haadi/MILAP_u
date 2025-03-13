import React from "react";
import { FormLayout } from "../../components/FormLayout";
import UpdateTrackingForm from "../../components/UpdateTrackingForm"; // ✅ Correct import

export function UpdateLostPerson() {
  return (
    <FormLayout title="Update Lost Person">
      <UpdateTrackingForm title="Update Lost Person" />
    </FormLayout>
  );
}

export default UpdateLostPerson;
