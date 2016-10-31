import React from 'react';
import {Link} from 'react-router'

class LoginForm extends React.Component {
  	render() 
	 	{
		return (
			<div className="col-sm-6 col-md-6 col-md-offset-3">
				<div className="panel panel-default">
					<div className="panel-heading">
						<strong> Sign in to continue</strong>
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
												<input className="form-control" placeholder="Username" name="loginname" type="text"/>
											</div>
										</div>
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon">
													<i className="glyphicon glyphicon-lock"></i>
												</span>
												<input className="form-control" placeholder="Password" name="loginpassword" type="password" value=""/>
											</div>
										</div>
										<div className="form-group">
											<input type="submit" className="btn btn-lg btn-primary btn-block" value="Sign in"/>
										</div>
									</div>
								</div>
							</fieldset>
						</form>
					</div>
					<div className="panel-footer ">
						Don't have an account! <Link to="/signup" onClick=""> Sign Up Here </Link>
					</div>
      	 		</div>
			</div>
		);	
	}

}	
export default LoginForm;	