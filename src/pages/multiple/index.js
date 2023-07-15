import { useRouter } from "next/router";

const multiplePage = () => {
  const router = useRouter();
  const step = router.query.step ?? 0
  return (
    <div>
      {step == 0 && (
        <>
          <h3>Step {step}</h3>
          <buttton onClick={() => goToStep(1, "/personal")}>Next Step</buttton>
        </>
      )
      }
    </div>
  )
}

export default multiplePage