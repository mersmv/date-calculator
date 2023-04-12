import { StyledDate } from "./styled"

const Calculated = ({years, months, days}) => {
  
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentMonth = currentDate.getMonth()+1;
    const currentYear = currentDate.getFullYear();

    let calculatedYears = currentYear - years;
    let calculatedMonths = currentMonth - months;
    let calculatedDays = currentDay - days;

    if(calculatedMonths<0){
        calculatedMonths = calculatedMoths + 12;
        calculatedYears = calculatedYears - 1;
    }
    if(calculatedDays<0){
        calculatedDays = calculatedDays + 30,
        calculatedMonths= calculatedMonths-1;
    }

    return (
        <StyledDate>
        <h1>{calculatedYears} years</h1>
        <h1>{calculatedMonths} months</h1>
        <h1>{calculatedDays} days</h1>
        </StyledDate>
    )
}

export default Calculated