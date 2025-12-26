import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { fetchSiteContent, defaultContent, SiteContent } from "@/lib/firebase";

interface ContentContextType {
  content: SiteContent;
  loading: boolean;
  error: string | null;
}

const ContentContext = createContext<ContentContextType>({
  content: defaultContent,
  loading: true,
  error: null,
});

export const useContent = () => useContext(ContentContext);

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await fetchSiteContent();
        setContent(data);
      } catch (err) {
        setError("Failed to load content");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  return (
    <ContentContext.Provider value={{ content, loading, error }}>
      {children}
    </ContentContext.Provider>
  );
};
