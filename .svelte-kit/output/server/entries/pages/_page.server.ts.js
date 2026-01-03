const load = async ({ platform }) => {
  const db = platform?.env?.DB;
  if (!db) {
    return { user: null, eventTypes: [] };
  }
  const user = await db.prepare("SELECT id, name, slug, email, profile_image, brand_color FROM users LIMIT 1").first();
  if (!user) {
    return { user: null, eventTypes: [] };
  }
  const eventTypes = await db.prepare(
    `SELECT id, name, slug, duration_minutes as duration, description, is_active
			FROM event_types
			WHERE user_id = ? AND is_active = 1
			ORDER BY name ASC`
  ).bind(user.id).all();
  return {
    user: {
      name: user.name,
      slug: user.slug,
      profileImage: user.profile_image,
      brandColor: user.brand_color
    },
    eventTypes: eventTypes.results
  };
};
export {
  load
};
