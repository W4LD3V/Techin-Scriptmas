let customerData = {
    'Joe': {
      visits: 1
    },
    'Carol': {
      visits: 2
    },
    'Howard': {
      visits: 3
    },
    'Carrie': {
      visits: 4
    }
  };
  
  function greetCustomer(name) {
    
    if (customerData[name]) {
      let visits = customerData[name].visits;
  
      
      if (visits === 1) {
        return `Ho ho ho! Welcome back, ${name}! We’re glad you enjoyed your first visit! 🎅`;
      }
  
      
      if (visits > 1) {
        return `Merry greetings, ${name}! So wonderful to see you again! 🎄`;
      }
    }
  
    
    return 'Welcome to the North Pole Café! Is this your first time? ❄️';
  }
  
  
  console.log(greetCustomer('Joe')); 
  console.log(greetCustomer('Carol')); 
  console.log(greetCustomer('Bob')); 
  console.log(greetCustomer('Howard')); 
  