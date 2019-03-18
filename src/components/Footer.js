import React, {Component} from 'react';


class Footer extends Component {
    render() { 
        return (
       
            <footer classNameName="page-footer font-small pt-4">
                <div className="container-fluid blue text-center text-md-left">
                  <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                      <h5 className="text-uppercase">About US</h5>
                      <p className="para">The Movie Database (TMDb) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.</p>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3"/>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">API</h5>
                        <ul className="list-unstyled">
                          <li>
                            <a href="https://developers.themoviedb.org/3/movies/get-movie-details" target="_blank">Movies</a>
                          </li>
                          <li>
                            <a href="https://developers.themoviedb.org/3/tv/get-tv-details" target="_blank">TV</a>
                          </li>
                          <li>
                            <a href="https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details" target="_blank">TV season</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">LEGAL</h5>
            
                        <ul className="list-unstyled">
                          <li>
                            <a href="#!">Terms of use</a>
                          </li>
                          <li>
                            <a href="#!">Privacy Policy</a>
                          </li>
                         
                        </ul>
                      </div>
                  </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                  <a href="https://themoviedb.org" target="_blank">THE MOVIE DATA BASE</a>
                </div>
            </footer>
             
               );
    }
}
 
export default Footer;