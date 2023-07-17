import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";

const MultiplePage = () => {
  const router = useRouter();
  const step = router.query.step ?? 0

  const goToStep = (_step, asPath) => {
    router.push(`/multiple?step=${_step}`, asPath)
  }

  const [loaded, setLoaded] = useState(false);
  return (
    <div>
      <Head>
        <title>multipleページ</title>
      </Head>
      { step == 0 && (
        <>
          <h3>Step {step}</h3>
          <buttton onClick={() => goToStep(1, "/personal")}>Next Step</buttton>
        </>
      )}
      { step == 1 && (
        <>
          <h3>Step {step}</h3>
          <buttton onClick={() => goToStep(2, "/confirm")}>Next Step</buttton>
        </>
      )}
      { step == 2 && (
        <>
          <h3>Step {step}</h3>
          <buttton onClick={() => goToStep(0, "/multiple")}>Next Step</buttton>
        </>
      )}
      {/* <Script src="/script.js" onLoad={() => {setLoaded(true)}} onError={e => console.error(e)}>
        
      </Script> */}
    </div>

  )
}

export default MultiplePage