-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Categories Table (Bhajans, Kathas, Aartis, Scriptures)
create table categories (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  name text not null,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Content Entities (The abstract concept of a specific Bhajan/Katha)
-- e.g. "Hanuman Chalisa" is the entity
create table content_entities (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  category_id uuid references categories(id) on delete cascade not null,
  day_of_week int, -- 0=Sunday, 1=Monday... for daily ritual logic
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Content Translations (The actual text in specific languages)
create table content_translations (
  id uuid primary key default uuid_generate_v4(),
  entity_id uuid references content_entities(id) on delete cascade not null,
  language_code text not null check (language_code in ('en', 'hi', 'sa')), -- English, Hindi, Sanskrit
  title text not null,
  body_text text not null, -- Markdown supported
  transliteration text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(entity_id, language_code)
);

-- Indexes for performance
create index idx_content_entities_category on content_entities(category_id);
create index idx_content_entities_day on content_entities(day_of_week);
create index idx_content_translations_lookup on content_translations(entity_id, language_code);

-- Seed Categories
insert into categories (slug, name, description) values
('bhajans', 'Bhajans', 'Devotional songs grouped by deity'),
('kathas', 'Kathas', 'Weekly and festival stories (Vrat Kathas)'),
('aartis', 'Aartis', 'Short ritual hymns'),
('scriptures', 'Scriptures', 'Major texts like Gita, Upanishads');
