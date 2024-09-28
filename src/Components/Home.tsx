
import { Card, CardHeader, CardBody, CardFooter,Heading,Text,Button } from '@chakra-ui/react'
import AboutDrawer from './AboutDrawer'
function Home() {
    
    return (
        <div> 
<Card align='center'>
  <CardHeader>
  <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
  </CardHeader>
  <CardBody>
 <h1 className="heading-name">
    I'M
 <strong className="main-name"> Lilieth Chacon</strong>
 </h1>
  </CardBody>
  <CardFooter>
    <AboutDrawer/>
  </CardFooter>
</Card>        
</div>
    )
} 
export default Home