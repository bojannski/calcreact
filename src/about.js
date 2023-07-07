import "./otherstyles.css";
export default function About() {
    return (
        <div>
            <h1>
                About us
            </h1>
            <div clssName="photosinabout">
                <div class="aboutrow">
                    <div class="aboutcolumn">
                        <img src="./content/education.jpg" alt="teaching" style={{width:"80%" , height:"400px"}}></img>
                    </div>
                    <div class="aboutcolumn">
                        <img src="./content/calculations.jpg" alt="calaculation" width="80%" height="400px"></img>
                    </div>
                </div> 
            </div>
            
            <div className="paragabout">
                <p>We are a group of IT professionals enthusiastic in creating quality free tools and content on the Internet. The main purpose of this website is to provide a comprehensive collection of free online calculators for ease of public use. This site was launched on calculators.info first in 2007. In 2008, we migrated to calculator.net. The calculators on this site were grouped into 4 sections: financial, fitness & health, math, and others. All of the calculators were developed in-house. Some calculators use open-source JavaScript components under different open-source licenses. More than 90% of the calculators are based on well-known formulas or equations from textbooks, such as the mortgage calculator, BMI calculator, etc. If formulas are controversial, we provide the results of all popular formulas, as can be seen in the Ideal Weight Calculator. Calculators such as the love calculator that are solely meant for amusement are based on internal formulas. The results of the financial calculators were reviewed by our financial advisors, who work for major personal financial advising firms. The results of the health calculators were reviewed and approved by local medical doctors. More than 99% of the descriptive content was developed in-house with a small amount of content taken from wikipedia.org under the GNU Free Documentation License. The descriptive content of the financial calculators was created and reviewed by our financial team. The descriptive content of the health calculators was reviewed by local medical doctors. This site is owned and operated by Maple Tech. International LLC.</p>
            </div>
        </div>
    )
    
}