import { useRouter } from "next/router";

const multiplePage = () => {
  const router = useRouter();
  const step = router.query.step ?? 0

  const goToStep = (_step, asPath) => {
    router.push(`/multiple?step=${_step}`, asPath)
  }
  return (
    <div>
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
    </div>
  )
}

export default multiplePage