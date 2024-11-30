import Image from 'next/image';

const reloadPage = () => {
  window.location.href = '/';
}

const Head = () => {
  return (
    <div className="bg-black p-5 text-white" onClick={reloadPage}>
        <div className="flex gap-5">
        <Image src="/logo.png" alt="TikService" width={64} height={64} className="inline cursor-pointer" />
        <h1 className="inline self-center gap-10 cursor-pointer text-3xl font-semibold">GetShorts</h1>
      </div>
    </div>
  );
};

export default Head;