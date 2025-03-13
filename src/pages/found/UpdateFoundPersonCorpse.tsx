import React from "react";
import { FormLayout } from "../../components/FormLayout";
import UpdateTrackingForm from "../../components/UpdateTrackingForm"; // ✅ Correct import

export function UpdateFoundPersonCorpse() {
  return (
    <FormLayout title="Update Found Person/Corpse Details">
      <UpdateTrackingForm title="Update Found Person/Corpse" />
    </FormLayout>
  );
}

export default UpdateFoundPersonCorpse;
