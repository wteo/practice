function ageEligibility(min, max) {
  return age = (personAge) => {
    return (personAge < min || personAge > max) ? "Not eligible." : "Eligible.";
  }
}

const canDrive = ageEligibility(16, 65);
const canWork = ageEligibility(15, 75);
