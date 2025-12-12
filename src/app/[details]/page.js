import BackButton from '@/components/BackButton';
import Details from '@/components/Details'
import { Suspense } from 'react';
import Loading from './loading';

export const metadata = {
  title: "Countries App Details",
  description: "Details about selected country",
};

function page() {
  
  return (
    <div className="w-full px-5 py-10 m-auto max-w-100 md:max-w-325 md:py-15 lg:py-17">
      <BackButton />
      <Suspense fallback={<Loading/>}><Details /></Suspense>
      
    </div>
  )
}

export default page