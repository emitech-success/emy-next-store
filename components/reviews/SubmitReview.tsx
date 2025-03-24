'use client';
import { useState } from 'react';
// import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import { Card } from '@/components/ui/card';
import RatingInput from '@/components/reviews/RatingInput';
// import TextAreaInput from '@/components/form/TextAreaInput';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { createReviewAction } from '@/utils/actions';
import TextareaInput from '../form/TextareaInput';
import { SubmitButton } from '../form/Button';

function SubmitReview({productId}:{productId: string}) {
    const [isReviewFormVisible, setIsReviewFormVisible] = useState(false)
    const {user} = useUser();

  return (
    <div>
        <Button size='lg' className='capitalize' onClick={() => setIsReviewFormVisible((prev) => !prev)}>
            leave review
        </Button>
        {isReviewFormVisible && <Card className='p-8 mt-8'>
            <FormContainer action={createReviewAction}>
                <input type="hidden" name="productId" value={productId} />
                <input type="hidden" name="productId" value={user?.firstName || 'user'} />
                <input type="hidden" name="productId" value={user?.imageUrl} />
                <RatingInput name='rating' />
                <TextareaInput name='comment' labelText='feedback' defaultValue='Oustanding product!!!' />
                <SubmitButton className='mt-4'/>
            </FormContainer>
            </Card>}
    </div>
  )
}

export default SubmitReview