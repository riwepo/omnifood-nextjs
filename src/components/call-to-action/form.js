import { Button3 } from "../ui/buttons";
import FormInput from "./form-input";
import FormSelect from "./form-select";

const optionData = [
  { index: 1, value: "", text: "Please choose one option:" },
  { index: 2, value: "friends", text: "Friends and family" },
  { index: 3, value: "youtube", text: "YouTube video" },
  { index: 4, value: "podcast", text: "Podcast" },
  { index: 5, value: "ad", text: "Facebook ad" },
  { index: 6, value: "others", text: "Others" },
];

function Form() {
  return (
    <form className="cta-form grid grid-cols-2 gap-x-8 gap-y-6" name="sign-up">
      <FormInput
        id="full-name"
        type="text"
        label="Full Name"
        placeholder="John Smith"
      />
      <FormInput
        id="email"
        type="email"
        label="Email address"
        placeholder="me@example.com"
      />
      <FormSelect
        id="select-where"
        label="Where did you hear from us?"
        options={optionData}
      />

      <Button3 extraClasses="" href="#">
        Sign up now
      </Button3>
    </form>
  );
}

export default Form;