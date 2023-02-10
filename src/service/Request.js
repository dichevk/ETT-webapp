export default class RequestService {
  constructor(http) {
    this.http = http;
  }


  async getPartners(id) {
    const query = id ? `/${id}?populate=members.image,image` : '?populate=members.image,image';
    return this.http.fetch(`/api/partners${query}`, {
      method: 'GET',
    }); 
  }

  async getTeams(id) {
    const query = id ? `/${id}?populate=members.image,image` : '?populate=members.image,image';
    return this.http.fetch(`/api/teams${query}`, {
      method: 'GET',
    }); 
  }

  async getEvents(id) {
    const query = id ? `/${id}?populate=image` : '?populate=image';
    return this.http.fetch(`/api/events${query}`, {
      method: 'GET',
    }); 
  }

  async getBlogs(id) {
    console.log("get Blogs");
    const query = id ? `/${id}?populate=image` : '?populate=image';
    return this.http.fetch(`/api/blogs${query}`, {
      method: 'GET',
    }); 
  }

  async getMembers(id) {
    const query = id ? `/${id}?populate=image` : '?populate=image';
    return this.http.fetch(`/api/members${query}`, {
      method: 'GET',
    }); 
  }

  async getLogo(id) {
    const query = id ? `/${id}?populate=image` : '?populate=image';
    return this.http.fetch(`/api/logos${query}`, {
      method: 'GET',
    }); 
  }
  async getBackground(id) {
    const query = id ? `/${id}` : '';
    return this.http.fetch(`/api/backgrounds${query}`, {
      method: 'GET',
    }); 
  }

  // onSync(callback) {
  //   return this.socket.onSync('partners', callback);
  // }
}
