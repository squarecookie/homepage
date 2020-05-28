import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Home from "@material-ui/icons/Home";
// import Phone from "@material-ui/icons/Phone";
import beianImg from 'assets/img/beian.png'
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>联系我们</h2>
            <h3 className={classes.title}>方饼干科技（深圳）有限公司</h3>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                  <InfoArea
                    description=''
                    className={classes.email}
                    title="enquiry@squarecooky.com"
                    icon={Email}
                  />
                </GridItem>
                {/*<GridItem xs={12} sm={12} md={12}>
                  <InfoArea
                    description=''
                    className={classes.email}
                    title="18420455136"
                    icon={Phone}
                  />
                </GridItem>*/}
                <GridItem xs={12} sm={12} md={12}>
                  <InfoArea
                    description=''
                    className={classes.email}
                    title="深圳市南山区粤兴一道18号香港理工大学产学研大楼308室"
                    icon={Home}
                  />
                </GridItem>
              </GridContainer>
{/*            <h4 className={classes.description}>
              Divide details about your product or agency work into parts. Write
              a few lines about each one and contact us about any further
              collaboration. We will responde get back to you in a couple of
              hours.
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="primary">Send Message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>*/}
          </GridItem>
          <GridItem cs={12} sm={12} md={8}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                  <a href="http://beian.miit.gov.cn/" rel="noopener noreferrer" target="_blank">粤ICP备19066015号</a>
                </GridItem>
              </GridContainer>
          </GridItem>
          <div style={{'width': '300px', 'margin':'0 auto', 'padding': '20px 0'}}>
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502005337" style={{'display': 'inline-block', 'textDecoration': 'none', 'height': '20px', 'lineHeight': '20px'}}><img src={beianImg} style={{'float': 'left'}}/><p style={{'float':'left', 'height': '20px', 'lineHeight':'20px', 'margin': '0px 0px 0px 5px', 'color': '#939393'}}>粤公网安备 44030502005337号</p></a>
          </div>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
