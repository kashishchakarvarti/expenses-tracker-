import React from 'react';
import {Link} from 'react-router'

class SignupForm extends React.Component {
  	render() 
	 	{
		return (
		<div className="col-sm-6 col-md-6 col-md-offset-3">
			<div className="panel panel-default">
				<div className="panel-heading">
					<strong> Sign up to continue</strong>
				</div>
   					<div className="panel-body">
					<form role="form" action="#" method="POST">
					<fieldset>						
						<div className="row">
							<div className="col-sm-12 col-md-10  col-md-offset-1 ">
								<div className="form-group">
									<div className="input-group">
										<span className="input-group-addon">
											
										</span> 
										<input className="form-control" placeholder="Username" name="signupName" type="text"/>
									</div>
								</div>
								<div className="form-group">
									<div className="input-group">
										<span className="input-group-addon">
											
										</span> 
										<input className="form-control" placeholder="Email" name="signupEmail" type="text"/>
									</div>
								</div>
								<div className="form-group">
									<div className="input-group">
										<span className="input-group-addon">
											<i className="glyphicon glyphicon-lock"></i>
										</span>
										<input className="form-control" placeholder="Password" name="signuppassword" type="password" value=""/>
									</div>
								</div>
								<div className="form-group">
									<div className="input-group">
										<span className="input-group-addon">
											<i className="glyphicon glyphicon-lock"></i>
										</span>
										<input className="form-control" placeholder="Retype Password"  type="password" value=""/>
									</div>
								</div>
								<div className="form-group">
									<input type="submit" className="btn btn-lg btn-primary btn-block" value="Sign up"/>
								</div>
							</div>
						</div>
					</fieldset>
				</form>
				</div>    
					<div className="panel-footer ">
						Have an account! <Link to="/" onClick=""> Login Here </Link>
					</div>
      		</div>
		</div>
		);	
	}

}	
export default SignupForm;	