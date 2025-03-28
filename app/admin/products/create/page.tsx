// import SubmitButton from "@/components/form/Button";
import { SubmitButton } from "@/components/form/Button";
import CheckboxInput from "@/components/form/CheckboxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextareaInput from "@/components/form/TextareaInput";
// import { Button } from "@/components/ui/button";
import { createProductAction } from "@/utils/actions";
import {faker} from '@faker-js/faker';



function CreateProductPage() {
  const name = faker.commerce.productName()
  const company = faker.company.name()
  const description = faker.lorem.paragraph({min: 10, max: 12})
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize ">
        create product
      </h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
          <FormInput type="text" name="name" label="product name" defaultValue={name}/>
          <FormInput type="text" name="company" label="company" defaultValue={company}/>
          <PriceInput /> 
          <ImageInput />
          </div>
          <TextareaInput 
          name="description" labelText="description" defaultValue={description}
          />
          <div className="mt-6">
            <CheckboxInput name="featured" label="featured" />
          </div>
          <SubmitButton text="create prduct" className="mt-6" />
        </FormContainer>
      </div>
    </section>
  )
}
export default CreateProductPage