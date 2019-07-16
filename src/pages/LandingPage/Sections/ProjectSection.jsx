import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";

// @material-ui/icons
// import Email from "@material-ui/icons/Email";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
// import Button from "components/CustomButtons/Button.jsx";
// import InfoArea from "components/InfoArea/InfoArea.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import yfg01 from "assets/img/projects/yfg01.jpg";
import yfg02 from "assets/img/projects/yfg02.jpg";
import yfg03 from "assets/img/projects/yfg03.jpg";
import yfg04 from "assets/img/projects/yfg04.jpg";
import yfgqrcode from "assets/img/projects/yfgqrcode.jpg";

import js01 from "assets/img/projects/js01.jpg";
import js02 from "assets/img/projects/js02.jpg";
import js03 from "assets/img/projects/js03.jpg";
import jswxqrcode from "assets/img/projects/jswxqrcode.jpg";
import jsh5qrcode from "assets/img/projects/jsh5qrcode.png";

import qqp01 from "assets/img/projects/qqp01.jpg";
import qqp02 from "assets/img/projects/qqp02.jpg";
import qqp03 from "assets/img/projects/qqp03.png";
import qqp04 from "assets/img/projects/qqp04.png";
import qqpqrcode from "assets/img/projects/qqpqrcode.png";

import mib01 from "assets/img/projects/mib01.jpg";

import fdex01 from "assets/img/projects/fdex01.jpg";

import mimosa01 from "assets/img/projects/mimosa01.jpg";
import mimosa02 from "assets/img/projects/mimosa02.jpg";

import cps01 from "assets/img/projects/cps01.jpg";
import cps02 from "assets/img/projects/cps02.jpg";

import projectStyle from "assets/jss/material-kit-react/views/landingPageSections/projectStyle.jsx";

class ProjectSection extends React.Component {
  render() {
    const { classes } = this.props;
    // const imageClasses = classNames(
    //   classes.imgRaised,
    //   classes.imgRoundedCircle,
    //   classes.imgFluid
    // );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12}>
            <h2 className={classes.title}>客户案例</h2>
                <NavPills
                  color="primary"
                  tabs={[
                    {
                      tabButton: "玉峰谷",
                      tabContent: (
                          <GridContainer justify="center" className={classes.content}>
                            <GridItem xs={12} sm={12} md={12}>
                              <GridContainer>
                                <GridItem xs={6} sm={9} md={9}>
                                  <h4 className={classes.projectDescription}>众包图像数据标注平台，基于博弈论的众包质量控制系统，节省人力，精准调控。</h4>
                                </GridItem>
                                <GridItem xs={6} sm={3} md={3}>
                                  <p>微信小程序</p>
                                  <Card plain>
                                    <img
                                      alt="..."
                                      src={yfgqrcode}
                                      className={navImageClasses}
                                    />
                                    <CardBody>                                      
                                    </CardBody>
                                  </Card>
                                </GridItem>
                              </GridContainer>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                  <h3>应用截图</h3>
                                </GridItem>
                                <GridItem xs={6} sm={3}>
                                  <img
                                    alt="..."
                                    src={yfg01}
                                    className={navImageClasses}
                                  />
                                </GridItem>
                                <GridItem xs={6} sm={3}>
                                  <img
                                    alt="..."
                                    src={yfg02}
                                    className={navImageClasses}
                                  />
                                </GridItem>
                                <GridItem xs={6} sm={3}>
                                  <img
                                    alt="..."
                                    src={yfg03}
                                    className={navImageClasses}
                                  />
                                 </GridItem>
                                <GridItem xs={6} sm={3}>
                                  <img
                                    alt="..."
                                    src={yfg04}
                                    className={navImageClasses}
                                  />
                                </GridItem>
                              </GridContainer>
                            </GridItem>
                          </GridContainer>
                      )
                    },
                    {
                      tabButton: "激似",
                      tabContent: (
                          <GridContainer justify="center" className={classes.content}>
                            <GridItem xs={12} sm={12} md={12}>
                              <GridContainer>
                                <GridItem xs={6} sm={6} md={6}>
                                  <h4 className={classes.projectDescription}>一个有趣的人脸识别小程序，从10000+明星数据中，1秒找出你最像的那一个。</h4>
                                </GridItem>
                                <GridItem xs={6} sm={3} md={3}>
                                  <p>微信小程序</p>
                                  <Card plain>
                                    <img
                                      alt="..."
                                      src={jswxqrcode}
                                      className={navImageClasses}
                                    />
                                    <CardBody>                                      
                                    </CardBody>
                                  </Card>
                                </GridItem>
                                <GridItem xs={6} sm={3} md={3}>
                                  <p>H5网页</p>
                                  <Card plain>
                                    <img
                                      alt="..."
                                      src={jsh5qrcode}
                                      className={navImageClasses}
                                    />
                                    <CardBody>                                      
                                    </CardBody>
                                  </Card>
                                </GridItem>
                              </GridContainer>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                              <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={12}>
                                  <h3>应用截图</h3>
                                </GridItem>
                                <GridItem xs={6} sm={3}>
                                  <img
                                    alt="..."
                                    src={js01}
                                    className={navImageClasses}
                                  />
                                </GridItem>
                                <GridItem xs={6} sm={3}>
                                  <img
                                    alt="..."
                                    src={js02}
                                    className={navImageClasses}
                                  />
                                </GridItem>
                                <GridItem xs={6} sm={3}>
                                  <img
                                    alt="..."
                                    src={js03}
                                    className={navImageClasses}
                                  />
                                 </GridItem>
                              </GridContainer>
                            </GridItem>
                          </GridContainer>
                      )
                    },
                    {
                      tabButton: "圈圈聘",
                      tabContent: (
                          <GridContainer justify="center" className={classes.content}>
                            <GridItem xs={12} sm={12} md={12}>
                              <GridContainer>
                                <GridItem xs={6} sm={9} md={9}>
                                  <h4 className={classes.projectDescription}>一个主打移动端的互联网招聘平台，利用人工智能+大数据技术将供应端（求职者）和需求端（公司客户）进行匹配。</h4>
                                </GridItem>
                                <GridItem xs={6} sm={3} md={3}>
                                  <p>H5网页</p>
                                  <Card plain>
                                    <img
                                      alt="..."
                                      src={qqpqrcode}
                                      className={navImageClasses}
                                    />
                                    <CardBody>                                      
                                    </CardBody>
                                  </Card>
                                </GridItem>
                              </GridContainer>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                  <h3>应用截图</h3>
                                </GridItem>
                                <GridItem xs={6} sm={3}>
                                  <img
                                    alt="..."
                                    src={qqp01}
                                    className={navImageClasses}
                                  />
                                </GridItem>
                                <GridItem xs={6} sm={3}>
                                  <img
                                    alt="..."
                                    src={qqp02}
                                    className={navImageClasses}
                                  />
                                </GridItem>
                                <GridItem xs={6} sm={3}>
                                  <img
                                    alt="..."
                                    src={qqp03}
                                    className={navImageClasses}
                                  />
                                 </GridItem>
                                <GridItem xs={6} sm={3}>
                                  <img
                                    alt="..."
                                    src={qqp04}
                                    className={navImageClasses}
                                  />
                                </GridItem>
                              </GridContainer>
                            </GridItem>
                          </GridContainer>
                      )
                    }
                  ]}
                />
          </GridItem>
          <GridItem cs={12} sm={12}>
            <h2 className={classes.title}>创新实验室</h2>
                <NavPills
                  color="warning"
                  tabs={[
                    {
                      tabButton: "MIB",
                      tabContent: (
                        <GridContainer className={classes.content}>
                          <GridItem xs={12} sm={12} className={classes.content}>
                            <h4 className={classes.projectDescription}>
                              一种模块化物联网系统，该系统将电源，通信以及常见智能设备功能模块化，允许用户灵活组建个性化的物联网应用场景。目前系统处于研发阶段，相关专利已在审批中。
                            </h4>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={12}>
                            <GridContainer>
                              <GridItem xs={12} sm={12}>
                                <img
                                  alt="..."
                                  src={mib01}
                                  className={navImageClasses}
                                />
                              </GridItem>
                            </GridContainer>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "FDEX",
                      tabContent: (
                        <GridContainer className={classes.content}>
                          <GridItem xs={12} sm={12} className={classes.content}>
                            <h4 className={classes.projectDescription}>
                              免佣去中心化区块链代币交易所<a href="https://fdex.squarecooky.com" rel="noopener noreferrer" target="_blank">FDEX</a>, 实现链上对盘与链下撮合的混合机制，最大化的兼顾了交易公平性与效率，交易所合约目前部署于以太坊Ropsten testnet
                            </h4>
                          </GridItem>
                          <GridItem xs={12} sm={12}>
                            <img
                              alt="..."
                              src={fdex01}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "含羞草",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} className={classes.content}>
                            <h4 className={classes.projectDescription}>
                              基于计算机视觉的智能节能教室解决方案
                            </h4>
                          </GridItem>
                          <GridItem xs={12} sm={6}>
                            <img
                              alt="..."
                              src={mimosa01}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={6}>
                            <img
                              alt="..."
                              src={mimosa02}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "ChartPatternSearch",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} className={classes.content}>
                            <h4 className={classes.projectDescription}>
                              基于模式识别的股票技术形态识别引擎<a href="https://www.chartpatternsearch.com" rel="noopener noreferrer" target="_blank">ChartPatternSearch</a>
                            </h4>
                          </GridItem>
                          <GridItem xs={12} sm={6}>
                            <img
                              alt="..."
                              src={cps01}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={6}>
                            <img
                              alt="..."
                              src={cps02}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(projectStyle)(ProjectSection);
