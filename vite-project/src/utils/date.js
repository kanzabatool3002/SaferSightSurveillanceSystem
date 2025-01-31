
export const formatDate = (dateString) => {
	const date = new Date(dateString);
	console.log('Formatted Date:', date); // Log the Date object for debugging
  
	if (isNaN(date.getTime())) {
	  return "Invalid Date";
	}
  
	return date.toLocaleString("en-US", {
	  year: "numeric",
	  month: "short",
	  day: "numeric",
	  hour: "2-digit",
	  minute: "2-digit",
	  hour12: true,
	});
  };
  