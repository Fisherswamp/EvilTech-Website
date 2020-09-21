import * as React from 'react';

export interface FAQProps {
	
}
 
const FAQ: React.FunctionComponent<FAQProps> = (props: FAQProps) => {
	return (
		<>
			<h1> Frequently Asked Questions</h1>
			<ul>
				<li>Why does your website look so bad?</li>
				<p>Nothing is more evil than an ugly website. </p>
			</ul>
			<ul>
				<li>What is your mission statement?</li>
				<p>Be Evil, as we said. Read our about page</p>
			</ul>
			<ul>
				<li>Why do you guys <span style={{fontWeight: "bold"}}>DO</span>? Like as a company?</li>
				<p>A little bit of this, a little bit of that. Check out our portfolio. Essentially, we work in the software side of tech and write evil open-source technology.</p>
			</ul>
		</>
	);
}
 
export default FAQ;