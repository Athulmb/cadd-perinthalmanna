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

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const fetchCourses = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/courses`);
    if (!res.ok) throw new Error('Failed to fetch courses');
    const data = await res.json();
    const mappedCourses = data.map(c => ({ ...c, id: c._id }));
    
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
    console.error('API Error:', err);
    return { courses: [], disciplines: [] };
  }
};

export const fetchCourseById = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/courses/${id}`);
    if (res.ok) {
      const data = await res.json();
      return { ...data, id: data._id };
    }
  } catch (err) {
    console.error('API Error:', err);
  }
  return null;
};

export const fetchBlogs = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`);
    if (res.ok) {
      const data = await res.json();
      return data.map(b => ({ ...b, id: b._id }));
    }
    return [];
  } catch (err) {
    console.error('API Error:', err);
    return [];
  }
};

export const fetchBlogById = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs/${id}`);
    if (res.ok) {
      const data = await res.json();
      return { ...data, id: data._id };
    }
  } catch (err) {
    console.error('API Error:', err);
  }
  return null;
};

export const fetchFaqs = async () => {
  let dbFaqs = [];
  try {
    const res = await fetch(`${API_BASE_URL}/faqs`);
    if (res.ok) {
      const data = await res.json();
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
    if (res.ok) {
      const data = await res.json();
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
    if (!res.ok) throw new Error('Failed to fetch placements');
    const data = await res.json();
    return data.map(p => ({ ...p, id: p._id }));
  } catch (err) {
    console.error('API Error:', err);
    return [];
  }
};

export const fetchEvents = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/events`);
    if (!res.ok) throw new Error('Failed to fetch events');
    const data = await res.json();
    return data.map(e => ({ ...e, id: e._id }));
  } catch (err) {
    console.error('API Error:', err);
    return [];
  }
};

export const fetchReels = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/reels`);
    if (!res.ok) throw new Error('Failed to fetch reels');
    const data = await res.json();
    return data.map(r => ({ ...r, id: r._id }));
  } catch (err) {
    console.error('API Error:', err);
    return [];
  }
};
