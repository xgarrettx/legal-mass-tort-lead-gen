import { ContactData, FormData } from '@/types/form';

// Get API endpoint from environment variables
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || 
  'https://script.google.com/macros/s/AKfycbyjUdbIBpq2LCSrMwXUBO9K8opgk_-0VQ1Poptiyd7veCJugbXhWsr92YfaN2SXLecE/exec';

const DEBUG_MODE = process.env.NEXT_PUBLIC_DEBUG_MODE === 'true';

// Map form data to the expected API format
function mapFormDataToApi(formData: FormData, contactData: ContactData) {
  const apiData = {
    first_name: contactData.firstName,
    last_name: contactData.lastName,
    email: contactData.email,
    phone: contactData.phone,
    app_user: formData.step1 || '', // yes/no for lost money
    which_app: formData.step2 || '', // betting app selection
    number_bets: formData.step3 || '', // number of bets
    diagnosed: formData.step4 || '', // yes/no for health condition
    condition: Array.isArray(formData.step5) ? formData.step5.join(', ') : (formData.step5 || ''), // health conditions
    approximate_losses: formData.step6 || '', // loss amounts
    date_of_birth: formData.step7 || '', // date of birth
    betting_age: formData.step8 || '', // age started betting
    zip_code: contactData.zipCode,
  };

  if (DEBUG_MODE) {
    console.log('API Payload:', apiData);
  }

  return apiData;
}

export async function submitLead(formData: FormData, contactData: ContactData): Promise<void> {
  const apiData = mapFormDataToApi(formData, contactData);
  
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiData),
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    // Google Apps Script might return text instead of JSON
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const result = await response.json();
      if (DEBUG_MODE) {
        console.log('API Response:', result);
      }
      return result;
    } else {
      const text = await response.text();
      if (DEBUG_MODE) {
        console.log('API Response (text):', text);
      }
      
      // Check if the response indicates success
      if (text.toLowerCase().includes('success') || response.status === 200) {
        return Promise.resolve();
      } else {
        throw new Error('API request failed: ' + text);
      }
    }
  } catch (error) {
    if (DEBUG_MODE) {
      console.error('API Error:', error);
    }
    throw error;
  }
}
