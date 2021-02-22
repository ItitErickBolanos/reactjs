import React from 'react';

class BadgeForm extends React.Component {
    handleChange = e => {
        /*console.log({ 
            name: e.target.name,
            value: e.target.value
        });*/
        this.setState({
            firstName: e.target.value
        });
    };

    handleClick = e => {
        console.log("Button was clicked");
    };

    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="first"/>
                    </div>
                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;