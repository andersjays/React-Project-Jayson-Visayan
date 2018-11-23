import React, { Component } from 'react';
import { Dropdown, Menu, Icon, Table } from 'semantic-ui-react'
const $ = require('jquery')
$.DataTable = require('datatables.net')

class BenefitView extends Component {
	render() {
		return(
      <main>
        <Title code={this.props.params.code} />
        <Body_Container code={this.props.params.code} />
      </main>
    )
  }
}

class Title extends Component{
 constructor(props) {
    super(props);
  }
  render(){
    return(
    <div className="page-title" style={{marginLeft: '150px'}} >
      <div className="ui clearing segment">
        <div className="ui container" style={{marginTop: '80px'}}>
          <h1 className="ui left floated header" style={{marginLeft: '-5%'}}>
          </h1><h2>View Benefit</h2>
          <div className="clearfix"></div>
          <div className="ui breadcrumb">
            <a href="/web/benefits/"> {this.props.code	} </a>
            <i className="right angle icon divider"></i>
            <div className="active section dim thin">Benefit
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}}

class Body_Container extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="ui container" style={{paddingLeft: '150px'}}>
        <div className="content-section white-bg">
          <Options code={this.props.code} />
          <General code={this.props.code} />
          <Content code={this.props.code} />
          <div class="sixteen wide computer column"><div class="ui divider"></div></div>
          <Datatable data={dataSet} />
        </div>
      </div>
              )}
}

class General extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="ui grid">
        <div className="row">
          <div className="two wide computer sixteen wide mobile column">
            <div className="mb-2 center aligned">
              <div className="mr-2">
                <img
                  src={process.env.PUBLIC_URL + '/images/tooth.png'}
                  style={{height: "80px"}}
                />
              </div>
              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Riders</label>
            </div>
          </div>
          <div className="six wide computer eight wide tablet eight wide mobile column">
            <p className="member-name" style={{color: 'rgb(0, 178, 79)'}}>{this.props.code	}</p>
            <div className="section-title mt-2">
              <h1><div className="title-name">{this.props.code	}</div></h1>
            </div>
          </div>
          <div className="eight wide computer eight wide tablet eight wide mobile column">
          </div>
          <div className="eight wide computer eight wide tablet eight wide mobile column">
          </div>
        </div>
      </div>
    )
  }
}

class Content extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="ui grid">
        <div className="six wide column">
          <div className="ui form">
            <div className="two fields">
              <div className="field dim">
                LAST UPDATE
              </div>
              <div className="valid_timezone field">June 01, 2018</div>
            </div>

            <div className="two fields">
              <div className="field dim">
                UPDATED BY
              </div>
              <div className="field">
                masteradmin
              </div>
            </div>
            <div className="two fields">
              <div className="field dim">
                COVERAGE
              </div>
              <div className="field">
                ACU
              </div>
            </div>

            <div className="two fields">
              <div className="field dim">
                ACU TYPE
              </div>
              <div className="field">
                Regular
              </div>
            </div>

            <div className="two fields">
              <div className="field dim">
                AVAILMENT CHANNEL
              </div>
              <div className="field">
                Hospital/Clinic and Mobile
              </div>
            </div>
            <div className="two fields">
              <div className="field dim">
                TYPE
              </div>
              <div className="field">
                Availment
              </div>
            </div>

            <div className="two fields">
              <div className="field dim">
                LIMIT TYPE
              </div>
              <div className="field">
                Sessions
              </div>
            </div>

            <div className="two fields">
              <div className="field dim">
                LIMIT
              </div>
              <div className="field">
                1
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

    let dataSet = [
    ["Pck1", "Pck1", "Male", "20"],
    ["Pck2", "Pck2", "Male", "20"],
    ["Pck3", "Pck3", "Male", "20"],
    ["Pck4", "Pck4", "Male", "20"],
    ["Pck5", "Pck5", "Male", "20"],
    ["Pck6", "Pck6", "Male", "20"],
    ["Pck7", "Pck7", "Male", "20"],
    ["Pck8", "Pck8", "Male", "20"],
    ["Pck9", "Pck9", "Male", "20"],
    ["Pck10", "Pck10", "Male", "20"],
    ["Pck11", "Pck11", "Male", "20"],
    ["Pck12", "Pck12", "Male", "20"],
    ["Pck13", "Pck13", "Male", "20"],
    ["Pck14", "Pck14", "Male", "20"],
    ["Pck15", "Pck15", "Male", "20"],
    ["Pck16", "Pck16", "Male", "20"],
    ["Pck17", "Pck17", "Male", "20"],
    ["Pck18", "Pck18", "Male", "20"],
    ["Pck19", "Pck19", "Male", "20"],
    ["Pck20", "Pck20", "Male", "20"],
    ["Pck21", "Pck21", "Male", "20"],
    ["Pck22", "Pck22", "Male", "20"]
    ]

class Datatable extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
        this.$el = $(this.el)
        this.$el.DataTable = require('datatables.net-se')
        this.$el.DataTable(
            {
                data: dataSet,
                columns: [
                    { title: "Code" },
                    { title: "Name" },
                    { title: "Gender" },
                    { title: "Age" }
                ],
                dom:
                    "<'ui grid'"+
                    "<'row'"+
                    "<'three wide column'f>"+
                    "<'left aligned twelve wide column'i>"+
                    ">"+
                    "<'row'"+
                    "<'center aligned sixteen wide column'>"+
                    ">"+
                    "<'row dt-table'"+
                    "<'sixteen wide column'tr>"+
                    ">"+
                    "<'row'"+
                    "<'four wide column'l>"+
                    "<'right aligned ten wide column'p>"+
                    "<'right aligned two wide column'>"+
                    ">"+
                ">",
                renderer: 'semanticUI',
                pagingType: "full_numbers",
                scrollX: true,
                language: {
                emptyTable:     "No Records Found!",
                zeroRecords:    "No Matching Records Found!",
                search:         "Search",
                paginate: {
                  first: "<i class='angle single left icon'></i> First",
                  previous: "<i class='angle double left icon'></i> Previous",
                  next: "Next <i class='angle double right icon'></i>",
                  last: "Last <i class='angle single right icon'></i>"
                },
                drawCallBack: function () {
                }
              }
            }
        )
    }
  render(){
    return(
      <div class="bottom-border pb-2 mb-2" id="benefit_package_dt">
        <div class="section-title mt-2"><div class="title-name">Packages</div></div>
        <div class="field">
            <table className="display" width="100%" ref={el => this.el = el}>

            </table>
        </div>
      </div>
    )
  }
}

class Options extends Component {
 render(){
  let styles = {textAlign: 'right', fontSize: '2rem', paddingTop: '1rem'}
   return(
<div className="eight wide computer eight wide tablet eight wide mobile column">
  <div className="two wide computer sixteen wide mobile column" style={styles}>
    <Dropdown icon='ellipsis vertical' direction='left'>
      <Dropdown.Menu>
        <Dropdown.Item icon='edit outline icon' text='Edit' />
        <Dropdown.Item icon='clone outline icon' text='Versions' />
        <Dropdown.Item icon='icon-product outline icon' text='View plans' />
        <Dropdown.Item icon='trash alternate outline icon' text='Discontinue' />
        <Dropdown.Item icon='trash alternate outline icon' text='Delete' />
      </Dropdown.Menu>
    </Dropdown>
</div>
</div>
  )
 }
}

export default BenefitView;
