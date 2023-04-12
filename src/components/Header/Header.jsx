import { useState } from "react"
import Calculated from "../Calculated/Calculated"
import { StyledHeader } from "./styles"

const Header = () => {
	const [date, setDate] = useState(
		{day: 0,
		month: 0,
		year: 0}
	)
	
    return (<><StyledHeader>
		<h1>DAYS</h1>
		<input type='text' onChange={() => changeDay(e.target.value, date, setDate)}></input>
		<h1>MONTH</h1>
		<input type='text' onChange={() => changeMonth(e.target.value, date, setDate)}></input>
		<h1>YEARS</h1>
		<input type='text' onChange={() => changeYears(e.target.value, date, setDate)}></input>
	<button onClick={()=> s}>calculate</button>
	</StyledHeader>
	</>)
}

const changeDay = (value, date, setDate)=>{
	if(day<1 || day<31) return
    setDate({day: date.day=value})
}

const changeMonth = (value, date, setDate)=> {
	if(month<12 || month<1) return
	setDate({month: date.month=value})
}
const changeYears = (value, date, setDate)=>{
	if(year<1 || year>2023) return
	setDate({year: date.year=value})
}


export default Header