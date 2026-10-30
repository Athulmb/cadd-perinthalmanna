import { categories as faqCategories } from './faqData';

export const DISCIPLINE_ORDER = [
  'Interior Design',
  'Civil & Architectural CAD',
  'BIM [Building Information Modelling]',
  'Structural Design',
  'Mechanical & Product Design',
  'Electrical, Electronics & Automation',
  'MEP Design & BIM',
  'Project Planning & Management [PPM]',
  'IT & Software Development'
];

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://cadd-backend-perinthalmanna-production.up.railway.app';

const safeJson = async (res) => {
  if (!res.ok) {
    throw new Error(`HTTP error ${res.status}`);
  }
  const contentType = res.headers.get('content-type');
  if (contentType && !contentType.includes('application/json')) {
    throw new Error(`Expected JSON but received ${contentType}`);
  }
  return res.json();
};

export const fetchCourses = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/courses`);
    const data = await safeJson(res);
    const mappedCourses = Array.isArray(data) ? data.map(c => ({ ...c, id: c._id })) : [];
    
    // Extract unique disciplines from the courses
    const uniqueDisciplines = [...new Set(mappedCourses.map(c => c.discipline))];
    // Sort them based on DISCIPLINE_ORDER if they exist there
    uniqueDisciplines.sort((a, b) => {
      const idxA = DISCIPLINE_ORDER.indexOf(a);
      const idxB = DISCIPLINE_ORDER.indexOf(b);
      if (idxA === -1 && idxB === -1) return 0;
      if (idxA === -1) return 1;
      if (idxB === -1) return -1;
      return idxA - idxB;
    });

    return { courses: mappedCourses, disciplines: uniqueDisciplines };
  } catch (err) {
    console.error('API Error (Courses):', err);
    return { courses: [], disciplines: [] };
  }
};

export const fetchCourseById = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/courses/${id}`);
    const data = await safeJson(res);
    return { ...data, id: data._id };
  } catch (err) {
    console.error('API Error (Course detail):', err);
    return null;
  }
};

export const fetchBlogs = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`);
    const data = await safeJson(res);
    return Array.isArray(data) ? data.map(b => ({ ...b, id: b._id })) : [];
  } catch (err) {
    console.error('API Error (Blogs):', err);
    return [];
  }
};

export const fetchBlogById = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs/${id}`);
    const data = await safeJson(res);
    return { ...data, id: data._id };
  } catch (err) {
    console.error('API Error (Blog detail):', err);
    return null;
  }
};

export const fetchFaqs = async () => {
  let dbFaqs = [];
  try {
    const res = await fetch(`${API_BASE_URL}/faqs`);
    const data = await safeJson(res);
    if (Array.isArray(data)) {
      dbFaqs = data.map(faq => ({
        id: faq._id,
        question: faq.question,
        answer: faq.answer,
        category: faq.category || 'general'
      }));
    }
  } catch (err) {
    console.error('Failed to fetch FAQs from DB:', err);
  }

  return { faqs: dbFaqs, categories: faqCategories };
};

export const fetchTestimonials = async () => {
  let dbTestimonials = [];
  try {
    const res = await fetch(`${API_BASE_URL}/testimonials`);
    const data = await safeJson(res);
    if (Array.isArray(data)) {
      dbTestimonials = data.map(t => ({
        id: t._id,
        name: t.name,
        role: t.course,
        rating: t.rating || 5,
        time: t.time || 'Recently',
        avatar: t.image || '/images/reviews/avatar.png',
        quote: t.review
      }));
    }
  } catch (err) {
    console.error('Failed to fetch Testimonials from DB:', err);
  }

  return dbTestimonials;
};

export const fetchPlacements = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/placements`);
    const data = await safeJson(res);
    return Array.isArray(data) ? data.map(p => ({ ...p, id: p._id })) : [];
  } catch (err) {
    console.error('API Error (Placements):', err);
    return [];
  }
};

export const fetchEvents = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/events`);
    const data = await safeJson(res);
    return Array.isArray(data) ? data.map(e => ({ ...e, id: e._id })) : [];
  } catch (err) {
    console.error('API Error (Events):', err);
    return [];
  }
};

export const fetchReels = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/reels`);
    const data = await safeJson(res);
    return Array.isArray(data) ? data.map(r => ({ ...r, id: r._id })) : [];
  } catch (err) {
    console.error('API Error (Reels):', err);
    return [];
  }
};
