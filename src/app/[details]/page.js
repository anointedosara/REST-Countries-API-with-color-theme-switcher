import BackButton from '@/components/BackButton';
import Details from '@/components/Details'

export const metadata = {
  title: "Countries App Details",
  description: "Details about selected country",
};

function page() {
  
  return (
    <div className="w-full px-5 py-10 m-auto max-w-100 md:max-w-325 md:py-15 lg:py-17">
      <BackButton />
      <Details />
    </div>
  )
}

export default page