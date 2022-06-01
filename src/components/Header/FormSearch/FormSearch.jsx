import { useForm } from "react-hook-form"
import search from "../../../images/search.jpg"

const FormSearch = () => {
    const { register, handleSubmit } = useForm();
    function onSubmit(data) {
        console.log(data)
    }
    return (
        <form className="form-wrap" onSubmit={handleSubmit(onSubmit)}>
            <input type="search" {...register("search")} placeholder="Enter search query" className="enter__form" />
            <input type="image" className="search" src={search} alt="Go" />
        </form>
    )
}

export default FormSearch;