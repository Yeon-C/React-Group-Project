import "./css/SidebarRight.css";
import newsicon from './css/images/news-icon.png';
import govicon from './css/images/gov-icon.png';
import brainicon from './css/images/brain-icon.png';
import verified from './css/images/verified.png';
import dogicon from './css/images/dog-icon.png';
import trexicon from './css/images/trex-icon.png';

    const SidebarRight = () => {
        return (
            <div>
                <input className="form-control me-2 search-bar" type="search" placeholder="Search Twitter" aria-label="Search" />
                    <div className="card news">
                        <div className="card-header">
                            <h4>What's happening</h4>
                        </div>
                        <div className="card-body">
                            <div className="row news-row">
                                <div className="title">
                                    <h6 className="card-subtitle mb-2 text-muted">Dinosaurs Return</h6>
                                    <p className="dot text-muted">.</p>             
                                    <h6 className="card-subtitle mb-2 text-muted">LIVE</h6>
                                </div>
                                <div className="headline">
                                    <h5 className="card-title">Woman who discovered dinosaurs return says she's been speaking to them for years</h5>
                                </div>
                                <div className="closing">
                                    <h6 className="card-subtitle mb-2 text-muted">Trending with</h6>
                                    <a href="#" className="card-link"><h6>#dinos</h6></a>
                                </div>
                            </div>    
                            <div className="row news-row">
                                <div className="title">
                                    <img className ="news-icons icon-gov" src={govicon} alt="Icon"></img>
                                    <h6 className="card-subtitle mb-2 ">USA Today</h6>
                                    <img className ="news-icons verified" src={verified} alt="Verified tick"></img>
                                    <p className="dot text-muted">.</p>             
                                    <h6 className="card-subtitle mb-2 text-muted">2 hours ago</h6>
                                </div>
                                <div className="headline">
                                    <h5 className="card-title">Three officials in the paleontologist society have confirmed that "Dino Chicken Nuggets" are indeed the return vessel for the extinct reptiles</h5>
                                </div>
                            </div>    
                            <div className="row news-row">
                                <div className="title">
                                    <img className ="news-icons icon-news" src={newsicon} alt="Icon"></img>
                                    <h6 className="card-subtitle mb-2 ">Entertainment Today</h6>
                                    <img className ="news-icons verified" src={verified} alt="Verified tick"></img>
                                    <p className="dot text-muted">.</p>             
                                    <h6 className="card-subtitle mb-2 text-muted">Last night</h6>
                                </div>
                                <div className="headline">
                                    <h5 className="card-title">Crypto.com purchases The White House</h5>
                                </div>
                                <div className="closing">
                                    <h6 className="card-subtitle mb-2 text-muted">Trending with</h6>
                                    <a href="#" className="card-link"><h6>#crypto</h6></a>
                                </div>
                            </div>    
                            <div className="row news-row">
                                <div className="title">
                                    <img className ="news-icons icon-brain" src={brainicon} alt="Icon"></img>
                                    <h6 className="card-subtitle mb-2 ">ETalk</h6>
                                    <img className ="news-icons verified" src={verified} alt="Verified tick"></img>
                                    <p className="dot text-muted">.</p>             
                                    <h6 className="card-subtitle mb-2 text-muted">5 hours ago</h6>
                                </div>
                                <div className="headline">
                                    <h5 className="card-title">Dog Mayor Rufus bans all dog pounds in Crayota County</h5>
                                </div>
                            </div>    
                        </div>
                    </div>                       
                    <div className="card follow">
                        <div className="card-header">
                            <h4>Who to follow</h4>
                        </div>
                        <div className="card-body">
                            <div className="row account-one">
                                <div className="follow-container">
                                    <div className="follow-icon">
                                        <img className ="dog-icon" src={dogicon} alt="Icon"></img>
                                    </div>
                                    <div className="follow-info">
                                        <h5 className="follow-name">Mayor Rufus</h5>
                                        <h5 className="follow-account text-muted">@mayorrufus</h5>
                                    </div>
                                    <div>
                                        <img className ="follow-verified" src={verified} alt="Verified tick"></img>
                                    </div>
                                    <div>
                                        <input type="button" value="Follow" className="follow-button-one"></input>  
                                    </div>
                                </div>            
                            </div>    
                            <div className="row account-two">
                                <div className="follow-container">
                                    <div className="follow-icon">
                                        <img className ="trex-icon" src={trexicon} alt="Icon"></img>
                                    </div>
                                    <div className="follow-info">
                                        <h5 className="follow-name">Rex</h5>
                                        <h5 className="follow-account text-muted">@rex</h5>
                                    </div>
                                    <div>
                                        <img className ="follow-verified" src={verified} alt="Verified tick"></img>
                                    </div>
                                    <div>
                                        <input type="button" value="Follow" className="follow-button-two"></input> 
                                    </div>
                                </div>            
                            </div>    
                        </div>
                    </div>                       
             </div>
        );
};

export default SidebarRight;
