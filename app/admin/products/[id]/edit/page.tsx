import { SubmitButton } from "@/components/form/Button"
import CheckboxInput from "@/components/form/CheckboxInput"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import ImageInputContainer from "@/components/form/ImageInputContainer"
import PriceInput from "@/components/form/PriceInput"
import TextareaInput from "@/components/form/TextareaInput"
import { fetchAdminProductDetails, updateProductAction, updateProductImageAction } from "@/utils/actions"



async function EditProductPage({params}:{params:{id: string}}) {
  const {id} = params
  const product = await fetchAdminProductDetails(id)
  const {name, featured, company, price, description} = product
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        update product
      </h1>
      <div className="border p-8 rounded">
        {/* IMAGE INPUT CONTAINER */}
        <ImageInputContainer action={updateProductImageAction} name={name} image={product.image} text="update image">
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={product.image} />
        </ImageInputContainer>
        <FormContainer action={updateProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4 ">
            <input type="hidden" name="id" value={id}  />
            <FormInput type="text" name="name" label="product name" defaultValue={name}/>
            <FormInput type="text" name="company"  defaultValue={company}/>
            <PriceInput defaultValue={price} />
          </div>
          <TextareaInput name="description" labelText="product description" defaultValue={description} />
          <div className="mt-6">
            <CheckboxInput name="featured" label="featured" defaultChecked={featured}/>
          </div>
          <SubmitButton text="update product" className="mt-8" />
        </FormContainer>
      </div>
      
    </section>
  )
}
export default EditProductPage