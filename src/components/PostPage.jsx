import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
const PostPage = () => {
	const [interval, setInterval] = useState(3000)
	const fetchData = ()=>{
		return axios.get('http://localhost:4000/postContent')
	}

	

	
	const onSuccess = (data)=>{
		console.log(data);
	}
	
	const onError = (error)=>{
		console.log(error);
		
	}
	const {isLoading,isError, data, error, status} = useQuery('posts', fetchData, {refetchInterval:interval, onError,onSuccess})

	console.log(isError, status, data.data);

	// if(data.data && data.data.length === 6) {
	// 	setInterval(false)
	// }
	
	const renderContent = (content) => {
		switch (content.type) {
			case 'Text block':
				return <p key={content.content}>{content.content}</p>;
			case 'Green accordion':
				return (
					<div key="green-accordion">
						{content.content.map((accordionItem, index) => (
							<div>hhh</div>
						))}
					</div>
				);
			case 'Accordion with image':
				return (
					<div key="accordion-with-image">
						{content.content.map((accordionItem, index) => (
							<div>aaaa</div>
						))}
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className="mb-1b">
			<div className="flex justify-around mContainer mb-10">
				<div className="w-[10%] h-48 hidden lg:block"></div>
				<div className="w-full lg:w-[840px] lg:h-auto py-5 px-2">
					
					<p className="text-pry font-medium mb-3">
						{'Categories > Sub-categories > child categories'}
					</p>
					
					
					{
						isLoading?<h1>loading</h1>:error?<h1>{error.message}</h1>:<><div className='space-y-8'>
						{data.data.map((content, index) => renderContent(content))}
					</div></>
					}
					
				</div>
				<div className="w-[10%] h-64 hidden lg:block"></div>
			</div>
		</div>
	);
};

export default PostPage;
