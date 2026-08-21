// components
import SectionHeader from './SectionHeader';
import ProductSwiper from '../products/ProductSwiper';

export default function FeatureProducts() {

  return (
    <section className="container  mx-auto  justify-center py-10 ">
      <SectionHeader title={'وصل حديثًا'} supTitle={'المزيد لاكتشافه'} />
      <div className="mt-10">
        <ProductSwiper />
      </div>
    </section>
  );
}
