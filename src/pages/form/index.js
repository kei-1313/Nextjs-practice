import { useState } from "react";
import Form from "../../components/form";
import List from "../../components/list";
import { useAppContext } from "../../context/AppContext";
import { useRouter } from "next/router";
import Link from "next/link";


const formPage = () => {
  const initialState = { name: "", birth: "" };
  const [value, setValue] = useState(initialState);
  const [ list, setList ] = useAppContext();
  const router = useRouter();

  const handleChange = (e) => {
    const inputId = e.target.id;
    const inputValue = e.target.value;
    setValue((prev) => ({ ...prev, [inputId]: inputValue }));
  };
  console.log(value);
  const handleAddClick = () => {
    setList((prev) => [...prev, { ...value, id: new Date().getTime() }]);
    setValue(initialState);
  };

  console.log(list);
  const handleResetClick = () => {
    setList([]);
  };
  return (
      <>
         <Form
          handleAddClick={handleAddClick}
          handleResetClick={handleResetClick}
          handleChange={handleChange}
          nameValue={value.name}
          birthValue={value.birth}
        />
        <List list={list} />
        <button onClick={() => router.push('/form/list')}>
          リストページへ
        </button>
        <Link href='/form/list'>
          アンカータグ
        </Link>
      </>
  )
}

export default formPage