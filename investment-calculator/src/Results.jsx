import { formatter } from "./util/investment"
import { calculateInvestmentResults } from "./util/investment";


export default function Results(props){
      const updatedValue={initialInvestment:+props.values['INITAL INVESTMENT'],annualInvestment:+props.values['ANNUAL_INVESTMENT'],expectedReturn:+props.values['YEARS'],duration:+props.values['DURATION']}
      const results=calculateInvestmentResults(updatedValue)
    return(
        <div>
            <h2>Results</h2>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Interest</th>
                        <th>Value at End of Year</th>
                        <th>Annual Investment</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result) => (
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.annualInvestment)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}