import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import OrgAdminDashboard from "./OrgAdminDashboards";
import OrgEmployeesDashboard from "./OrgEmployeesDashboard";
import SiteAdminDashboard from "./SiteAdminDashboard" ;
import SuperAdminDashboard from "./SuperAdminDashboard" ;
import Subscriber from "./Subscriber";

import VideoPlayer from "./VideoPlayer";
import FileUploadProgressBar from "./FileUploadProgressBar"; 
import ChunkFileUpload from "./ChunkFileUpload";

const DashboardsComp = (props) => {
	let { user_privileges_list: user } = props.authUser !== null && props.authUser;

	const [state, setState] = useState({
		videoJsOptionItems: []
	})
	let allSources = [
		{
		  src: 'https://api-dev-mns.immusservices.com/resume-name/video.mp4'
		},
	    {
	      src: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1'
	    },
	    {
	      src: 'https://encrypted-vtbn1.gstatic.com/video?q=tbn:ANd9GcT-SibjFOdpoALA7_4pk_nNNeEQF-l65aTHqIApMC3G1NnHdmzV'
	    },
	    {
	      src: 'https://encrypted-vtbn3.gstatic.com/video?q=tbn:ANd9GcQ4r_eljf_UiUzVMWa-Wa-XilkLU6p3U26dS6fojAjijXtRoXBF'
	    },
	    {
	      src: '//vjs.zencdn.net/v/oceans.mp4'
	    },
    ]
	useEffect(() => {
		let videoJsOptionEl = allSources && allSources.map(el => {
			const videoJsOptions = {
			  autoplay: false,
			  playbackRates: [0.5, 1, 1.25, 1.5, 2],
			  width: 720,
			  height: 300,
			  controls: true,
			  sources: [
			    {
			      src: el.src,
			      type: 'video/mp4',
			    },
			  ],
			}
			return videoJsOptions;
		})
		setState({videoJsOptionItems: videoJsOptionEl})
	}, [])
	const goFullscreen = (index) => {
	    console.log("index : ", index)
	    var elem = document.getElementById(index);
	    console.log("element : ", elem)
	    if (elem.requestFullscreen) {
		    elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) { /* Firefox */
		    elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
		    elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) { /* IE/Edge */
		    elem.msRequestFullscreen();
		}
	}
	return (
		<div>
			{user == "Super Administrator" && <SuperAdminDashboard />}
			{user == "Site Administrator" && <SiteAdminDashboard />}
			{user == "Org Admin" && 
				<div>
					<OrgAdminDashboard />
					<FileUploadProgressBar />
        			<hr />
					<ChunkFileUpload />
        			<hr />
					{state.videoJsOptionItems && state.videoJsOptionItems.map((el, index) => 
						<div key={index+1}>
							<h2>Video {index+1}</h2>
							<a href={el.sources[0].src} target="_blank" onClick={()=>goFullscreen(index+1)}>{el.sources[0].src}</a>
						    <VideoPlayer {...el} id={index+1}/>
						</div>
					)}	    
				</div>
			}		
			{user == "Org Employee" && <OrgEmployeesDashboard />}
			{user == "Subscriber" && <Subscriber /> }
		</div>
	);
};


const mapStateToProps = ({ auth }) => {
	const { authUser } = auth;
	return { authUser }
};

export default connect(mapStateToProps, {})(DashboardsComp);