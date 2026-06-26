import type {
  CmsBlogPost, CmsCaseStudy, CmsClientLogo, CmsFooter, CmsForm,
  CmsHeader, CmsPage, CmsProductModule, CmsSettings, CmsTestimonial,
  CollectionResponse, FormSubmitResult, SingletonResponse,
} from "@/lib/types";

const API_BASE = process.env.NEXT_PUBLIC_CMS_API_URL ?? "https://stage.odigma.ooo/ehswatch-cms/api/v1";

async function apiFetch<T>(path: string, revalidate = 300): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      next: { revalidate },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      console.error(`[CMS] ${res.status} for ${path}`);
      return null;
    }
    return res.json() as Promise<T>;
  } catch (err) {
    console.error(`[CMS] fetch failed for ${path}:`, err);
    return null;
  }
}

// ─── Singletons ───────────────────────────────────────────────────────────────

export async function getSettings() {
  return apiFetch<SingletonResponse<CmsSettings>>("/settings", 3600);
}
export async function getHeader() {
  return apiFetch<SingletonResponse<CmsHeader>>("/header", 3600);
}
export async function getFooter() {
  return apiFetch<SingletonResponse<CmsFooter>>("/footer", 3600);
}

// ─── Pages ────────────────────────────────────────────────────────────────────

export async function getPage(slug: string) {
  return apiFetch<SingletonResponse<CmsPage>>(`/pages/${slug}`, 300);
}
export async function getPageList() {
  return apiFetch<CollectionResponse<{ id: number; type: string; attributes: { slug: string; title: string; status: string; updated_at: string } }>>("/pages", 300);
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export async function getBlogPosts(category?: string) {
  const qs = category ? `?category=${encodeURIComponent(category)}` : "";
  return apiFetch<CollectionResponse<CmsBlogPost>>(`/blog-posts${qs}`, 60);
}
export async function getBlogPost(slug: string) {
  return apiFetch<SingletonResponse<CmsBlogPost>>(`/blog-posts/${slug}`, 300);
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

export async function getCaseStudies() {
  return apiFetch<CollectionResponse<CmsCaseStudy>>("/case-studies", 60);
}
export async function getCaseStudy(slug: string) {
  return apiFetch<SingletonResponse<CmsCaseStudy>>(`/case-studies/${slug}`, 300);
}

// ─── Other collections ────────────────────────────────────────────────────────

export async function getTestimonials() {
  return apiFetch<CollectionResponse<CmsTestimonial>>("/testimonials", 300);
}
export async function getClientLogos() {
  return apiFetch<CollectionResponse<CmsClientLogo>>("/client-logos", 3600);
}

// ─── Forms ────────────────────────────────────────────────────────────────────

export async function getForm(slug: string) {
  return apiFetch<SingletonResponse<CmsForm>>(`/forms/${slug}`, 30);
}

export async function submitForm(slug: string, data: Record<string, unknown>): Promise<FormSubmitResult> {
  try {
    const res = await fetch(`${API_BASE}/forms/${slug}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) return { ok: false, errors: json.errors };
    return { ok: true, data: json.data?.attributes };
  } catch (err) {
    console.error("[CMS] form submit failed:", err);
    return { ok: false, errors: [{ status: 500, code: "network_error", title: "Network error", detail: "Could not reach the server.", source: { pointer: "" } }] };
  }
}

// ─── Product Modules ─────────────────────────────────────────────────────────

export async function getProductModules() {
  return apiFetch<CollectionResponse<CmsProductModule>>("/product-modules", 300);
}
export async function getProductModule(slug: string) {
  return apiFetch<SingletonResponse<CmsProductModule>>(`/product-modules/${slug}`, 300);
}
